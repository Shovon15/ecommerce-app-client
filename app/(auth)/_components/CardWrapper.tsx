import React from "react";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "../../../components/ui/card";
import { Social } from "./Social";
import { Button } from "@/components/ui/button";
// import { Social } from "./Social";
// import { BackButton } from "./BachButton";

type CardWrapperProp = {
	children: React.ReactNode;
	headerText: string;
	headerLabel: string;
	backButtonLabel?: string;
	backButtonHref?: string;
	showSocial?: boolean;
};

export const CardWrapper = ({
	children,
	headerText,
	headerLabel,
	backButtonLabel,
	backButtonHref,
	showSocial,
}: CardWrapperProp) => {
	return (
		<Card className="w-full max-w-[400px] mx-auto shadow-none border-none p-4 bg-secondary">
			<CardHeader>
				<div className="w-full flex flex-col gap-y-4 items-center justify-center">
					<h1 className="text-3xl font-bold">{headerText}</h1>
					<p className="text-muted-foreground text-sm">{headerLabel}</p>
				</div>
			</CardHeader>
			<CardContent>{children}</CardContent>
			{showSocial && (
				<CardFooter>
					<Social />
				</CardFooter>
			)}
			{backButtonLabel && backButtonHref && (
				<CardFooter>

					{/* <Button
						onClick={() => {
							setAuthModalOpen(true);
							setFormComponent(<SignupForm />)
						}}
					>
						signup
					</Button> */}
					{/* <BackButton label={backButtonLabel} href={backButtonHref} /> */}
				</CardFooter>
			)}
		</Card>
	);
};
