"use client";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { HiTrash } from "react-icons/hi";

export default function DeleteAlert({ booking }) {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      const res = await fetch(`http://localhost:5000/booking/${booking._id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        router.refresh();
      }
    } catch (err) {
      console.error("Delete error:", err);
    }
  };
  return (
    <AlertDialog>
      <Button
        variant="soft"
        className="px-8 h-12 flex-1 text-lg rounded-none bg-red-600/80 border-none text-white font-normal sm:flex-none hover:bg-red-500/90 transition-colors"
      >
        Cancel <HiTrash className="text-2xl text-white" />
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px] rounded-none">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete Booking permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete{" "}
                <strong>{booking.destinationName} Booking</strong> and all of
                its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary" className="rounded-none">
                Cancel
              </Button>
              <Button
                slot="close"
                variant="danger"
                onClick={handleDelete}
                className="rounded-none"
              >
                Delete Booking
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
