/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect } from "react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "../../../components/ui/input";
import { Button } from "@/components/ui/button";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// import { CardWrapper } from "./CardWrapper";
// import { userLogedIn } from "@/redux/feature/auth/authSlice";
// import { useLoginMutation } from "@/redux/feature/auth/authApi";
// import Link from "next/link";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { CardWrapper } from "./CardWrapper";
import { useSelector } from "react-redux";
import { useActivationMutation } from "@/redux/feature/auth/authApi";
import { VerificationSchema } from "@/schemas";
import { FormError } from "@/components/fromError";
import { FormSuccess } from "@/components/fromSuccess";

type LoginProp = {
	setRoute: (route: string) => void;
	setModalOpen: (modalOpen: boolean) => void;
};

export const VerificationForm = ({ setRoute, setModalOpen }: LoginProp) => {
	const [success, setSuccess] = React.useState("");
	const [verificationError, setVerificationError] = React.useState("");
	const router = useRouter();

	const { token } = useSelector((state: any) => state.auth);
	
	const [activation, { isSuccess, isError, error, data, isLoading }] = useActivationMutation();


	useEffect(() => {
		if (isSuccess) {
			const message = data?.message || "verify succcessful";
			// toast.success(message);
			setSuccess(message)
			setModalOpen(false)
			router.push('/');
		}

		if (error) {
			if ("data" in error) {
				const errorData = error as any;
				const errorMessage = errorData?.data?.message || "something went wrong";
				// toast.error(errorMessage);
				setVerificationError(errorMessage)
			}
		}
	}, [error, isSuccess]);

	const form = useForm<z.infer<typeof VerificationSchema>>({
		resolver: zodResolver(VerificationSchema),
		defaultValues: {
			verificationCode: "",
		},
	});

	const onSubmit = async (value: z.infer<typeof VerificationSchema>) => {
		const varificationData = { activation_token: token, activation_code: value.verificationCode };
		// // console.log(varificationData, "varificationData");
		await activation(varificationData);
	};

	return (
		<CardWrapper
			headerText="account verification"
			headerLabel="verify your account">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
					<div className="space-y-4">
						<FormField
							control={form.control}
							name="verificationCode"
							render={({ field }) => (
								<FormItem>
									<FormLabel>verification code</FormLabel>
									<FormControl>
										<Input {...field}
											// disabled={isLoading}
											placeholder="****"
											type="number" />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<FormError message={verificationError} />
					<FormSuccess message={success} />
					<Button
						// disabled={isLoading}
						type="submit"
						className="w-full">
						verify
					</Button>
				</form>
			</Form>
		</CardWrapper>
	);
};
