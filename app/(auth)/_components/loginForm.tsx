/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect } from "react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "../../../components/ui/input";
import { Button } from "@/components/ui/button";
import * as z from "zod";
import { LoginSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
// import { CardWrapper } from "./CardWrapper";
// import { userLogedIn } from "@/redux/feature/auth/authSlice";
// import { useLoginMutation } from "@/redux/feature/auth/authApi";
// import Link from "next/link";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { CardWrapper } from "./CardWrapper";
import { AuthModal } from "./authModal";
import { SignupForm } from "./signupForm";
import { FormError } from "@/components/fromError";
import { FormSuccess } from "@/components/fromSuccess";
import { useLoginMutation } from "@/redux/feature/auth/authApi";
import ClipLoader from "react-spinners/clipLoader"

type LoginProp = {
	setRoute: (route: string) => void;
	setModalOpen: (modalOpen: boolean) => void;
};

export const LoginForm = ({ setRoute, setModalOpen }: LoginProp) => {
	const [loginSuccess, setLoginSuccess] = React.useState("");
	const [loginError, setLoginError] = React.useState("");
	const [login, { isError, error, data, isSuccess, isLoading }] = useLoginMutation();
	const router = useRouter();

	const form = useForm<z.infer<typeof LoginSchema>>({
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	useEffect(() => {
		if (isSuccess) {
			const message = data?.message || "login succcessful";
			setLoginSuccess(message);
			// toast.success(message);
			// router.push("/verification");
			// router.push("/profile");
			// console.log(data?.payload.user?.role ==="user")
		}

		if (error) {
			if ("data" in error) {
				const errorData = error as any;
				const errorMessage = errorData?.data?.message || "something went wrong";
				console.log(error)
				setLoginError(errorMessage)
				// toast.error(errorMessage);
			}
		}
	}, [error, isSuccess]);

	const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
		await login(values);

		// console.log({ isError, error, data, isSuccess, isLaoding });
	};

	return (
		<CardWrapper
			headerText="Login"
			headerLabel="Welome back"
			backButtonLabel="Don't have an account?"
			backButtonHref="/signup"
			showSocial
		>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
					<div className="space-y-4">
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input
											{...field}
											// disabled={isLoading}
											placeholder="john.doe@example.com"
											type="email"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Password</FormLabel>
									<FormControl>
										<Input
											{...field}
											// disabled={isLoading}
											placeholder="******"
											type="password"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<FormError message={loginError} />
					<FormSuccess message={loginSuccess} />
					<Button
						disabled={isLoading}
						type="submit"
						className="w-full"
					>
						{isLoading ? <ClipLoader /> : "login"}
					</Button>
					<p>
						Don&apos;t have an account?{" "}
						<span onClick={() => setRoute("signup")} className="cursor-pointer underline">
							signup
						</span>
					</p>
				</form>
			</Form>
		</CardWrapper>
	);
};
