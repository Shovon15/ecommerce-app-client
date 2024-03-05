"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogOverlay,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import "./authModal.css"



type DialogProp = {
    modalOpen: boolean;
    setModalOpen: (modalOpen: boolean) => void;
    handleOpen: () => void;
    formComponent: React.ReactNode;
    route: string;
};

export const AuthModal = ({ modalOpen, setModalOpen, handleOpen, formComponent ,route }: DialogProp) => {

    return (
        <Dialog open={modalOpen} onOpenChange={setModalOpen} >
            <DialogTrigger asChild>
                <Button onClick={handleOpen}>
                    {route}
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] max-h-[90vh] overflow-y-scroll custom-scrollbar p-0 bg-secondary mx-auto">
                {formComponent}
            </DialogContent>
        </Dialog>
    );
};
