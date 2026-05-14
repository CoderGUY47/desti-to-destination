"use client";
import React from 'react'
import {AlertDialog, Button} from "@heroui/react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function DeleteDestinaiton({destination}) {
    const {destinationName, _id} = destination;
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const handleDelete = async () => {
        const res = await fetch(`http://localhost:5000/destination/${_id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
            },
        });
        const data = await res.json();
        console.log(data);

    if (data.deletedCount > 0) {
      setIsOpen(false);
      router.push("/destinations");
    }
}

  return (
    <AlertDialog>
        <Button
          variant="outline"
          className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 h-10 text-lg border-1.5 border-red-300 text-red-500 rounded-none hover:bg-red-50 transition-colors font-medium"
        >
          <RiDeleteBin6Line className="text-lg" />
          Delete
        </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[600px] rounded-none">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading className='text-2xl font-semibold'>Delete destination permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p className='text-lg'>
                This will permanently delete <strong>{destinationName}</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary" className="rounded-none">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger" className="rounded-none">
                Delete Destination
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}

export default DeleteDestinaiton