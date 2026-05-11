"use client";

import { Button } from "@heroui/react";
import toast from "react-hot-toast";

export default function BorrowButton() {
   
  return (
    <Button variant="secondary"
      onClick={() =>  toast.success("Book borrowed successfully")}
      className="mt-8"
    >
      Borrow This Book
    </Button>
  );
}