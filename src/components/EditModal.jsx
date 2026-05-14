"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Button,
  FieldError,
  Modal,
  Input,
  Label,
  ListBox,
  ListBoxItem,
  ListBoxItemIndicator,
  Select,
  SelectIndicator,
  SelectPopover,
  SelectTrigger,
  SelectValue,
  Surface,
  TextArea,
  TextField,
} from "@heroui/react";
import { VscEditSparkle } from "react-icons/vsc";
import { RiDeleteBin6Line } from "react-icons/ri";

export function EditModal({ destination }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const {
    _id,
    destinationName,
    country,
    price,
    duration,
    imageUrl,
    category,
    departureDate,
    description,
  } = destination;
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const destinationData = Object.fromEntries(formData.entries());
    console.log(destinationData);

    const res = await fetch(`http://localhost:5000/destination/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(destinationData),
    });
    const data = await res.json();
    console.log(data);

    if (data.modifiedCount > 0) {
      setIsOpen(false);
      router.refresh();
    }
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
        <Button
          variant="outline"
          onPress={() => setIsOpen(true)}
          className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 h-10 text-lg border-1.5 border-zinc-300 rounded-none hover:bg-zinc-50 transition-colors font-medium text-zinc-700"
        >
          <VscEditSparkle className="text-lg" />
          Edit
        </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md md:max-w-lg lg:max-w-2xl">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading className="text-xl font-bold text-zinc-900 py-3 text-center">
                Edit Destination
              </Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-4">
              <Surface variant="default">
                <form id="edit-destination-form" onSubmit={onSubmit} className="p-2 space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Destination Name */}
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={destinationName}
                        name="destinationName"
                        isRequired
                      >
                        <Label>Destination Name</Label>
                        <Input
                          placeholder="Bali Paradise"
                          className="rounded-none"
                        />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* Country */}
                    <TextField defaultValue={country} name="country" isRequired>
                      <Label>Country</Label>
                      <Input placeholder="Indonesia" className="rounded-none" />
                      <FieldError />
                    </TextField>

                    {/* Category */}
                    <div>
                      <Select
                        name="category"
                        isRequired
                        className="w-full"
                        defaultSelectedKey={category}
                      >
                        <Label>Category</Label>
                        <SelectTrigger className="rounded-none">
                          <SelectValue />
                          <SelectIndicator />
                        </SelectTrigger>
                        <SelectPopover>
                          <ListBox>
                            <ListBoxItem id="Beach" textValue="Beach">
                              Beach
                              <ListBoxItemIndicator />
                            </ListBoxItem>
                            <ListBoxItem id="Mountain" textValue="Mountain">
                              Mountain
                              <ListBoxItemIndicator />
                            </ListBoxItem>
                            <ListBoxItem id="City" textValue="City">
                              City
                              <ListBoxItemIndicator />
                            </ListBoxItem>
                            <ListBoxItem id="Adventure" textValue="Adventure">
                              Adventure
                              <ListBoxItemIndicator />
                            </ListBoxItem>
                            <ListBoxItem id="Cultural" textValue="Cultural">
                              Cultural
                              <ListBoxItemIndicator />
                            </ListBoxItem>
                            <ListBoxItem id="Luxury" textValue="Luxury">
                              Luxury
                              <ListBoxItemIndicator />
                            </ListBoxItem>
                            <ListBoxItem id="Tropical" textValue="Tropical">
                              Tropical
                              <ListBoxItemIndicator />
                            </ListBoxItem>
                          </ListBox>
                        </SelectPopover>
                      </Select>
                    </div>

                    {/* Price */}
                    <TextField
                      defaultValue={price}
                      name="price"
                      type="number"
                      isRequired
                    >
                      <Label>Price (USD)</Label>
                      <Input
                        type="number"
                        placeholder="1299"
                        className="rounded-none"
                      />
                      <FieldError />
                    </TextField>

                    {/* Duration */}
                    <TextField
                      defaultValue={duration}
                      name="duration"
                      type="number"
                      isRequired
                    >
                      <Label>Duration (Days)</Label>
                      <Input
                        type="number"
                        placeholder="7 Days / 6 Nights"
                        className="rounded-none"
                      />
                      <FieldError />
                    </TextField>

                    {/* Departure Date */}
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={departureDate}
                        name="departureDate"
                        type="date"
                        isRequired
                      >
                        <Label>Departure Date</Label>
                        <Input type="date" className="rounded-none" />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* Image URL - Removed preview */}
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={imageUrl}
                        name="imageUrl"
                        isRequired
                      >
                        <Label>Image URL</Label>
                        <Input
                          type="url"
                          placeholder="https://example.com/bali-paradise.jpg"
                          className="rounded-none"
                        />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* Description */}
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={description}
                        name="description"
                        isRequired
                      >
                        <Label>Description</Label>
                        <TextArea
                          placeholder="Describe the travel experience..."
                          className="rounded-none"
                        />
                        <FieldError />
                      </TextField>
                    </div>
                  </div>
                </form>
              </Surface>
            </Modal.Body>
            <Modal.Footer>
              <Button
                type="submit"
                form="edit-destination-form"
                className="rounded-none bg-cyan-500 text-white px-6 h-10 text-base font-semibold"
              >
                Update Destination
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
