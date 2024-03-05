"use client";

import React, { useEffect, useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "../../../components/ui/input";
import Link from "next/link";
import * as z from "zod";
import { LoginSchema, RegisterSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { CardWrapper } from "./CardWrapper";

import { useRouter } from "next/navigation";
import { AuthModal } from "./authModal";
import { useRegisterMutation } from "@/redux/feature/auth/authApi";
import { FormError } from "@/components/fromError";
import { FormSuccess } from "@/components/fromSuccess";


type SignupProp = {
    setRoute?: (route: string) => void;
    setModalOpen?: (modalOpen: boolean) => void;
}

export const SignupForm = ({ setRoute, setModalOpen }: SignupProp) => {
    const [success, setSuccess] = React.useState("");
    const [error, setError] = React.useState("");
    const [register, { data, isSuccess, error: signupError, isLoading }] = useRegisterMutation();
    const router = useRouter();

    
    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });

    useEffect(() => {
        if (isSuccess) {
            const message = data?.message || "signup succcessful";
            setSuccess(message);
            if (setRoute) {
                setRoute("varification")
            } else {
                router.push('/verification');

            }
        }

        if (signupError) {
            if ("data" in signupError) {
                const errorData = signupError as any;
                const errorMessage = errorData?.data?.message || "something went wrong";
                setError(errorMessage);
            }
        }
    }, [signupError, isSuccess, data?.message, setRoute, router]);

    const onSubmit = async (values: z.infer<typeof RegisterSchema>) => {
        setSuccess("");
        setError("");
        await register(values);
    };

    return (
        <CardWrapper
            headerText="Signup"
            headerLabel="Create Your Account"
            backButtonLabel="Already have an account?"
            backButtonHref="/login"
            showSocial
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input {...field}
                                            //  disabled={isLoading} 
                                            placeholder="john doe" type="text" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
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
                                        <Input {...field}
                                            // disabled={isLoading} 
                                            placeholder="******" type="password" />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormError message={error} />
                    <FormSuccess message={success} />
                    <Button
                        disabled={isLoading}
                        type="submit" className="w-full">
                        {isLoading ? "loading..." : "Signup"}
                    </Button>

                    {
                        setRoute ?
                    <p>Already have an account? <span
                                onClick={() => setRoute("login")}
                                className="cursor-pointer underline"
                            >
                                Login
                            </span>
                            </p> : <p>Already have an account? <Link href="/login"

                                className="cursor-pointer underline"
                            >
                                Login
                            </Link>
                    </p>
                    }
                </form>
            </Form>
        </CardWrapper>
    );
};
