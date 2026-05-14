"use client";
import {
  Button,
  FieldError,
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
  TextArea,
  TextField,
} from "@heroui/react";
import React from "react";

const AddDestinationPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const destinationData = Object.fromEntries(formData.entries());
    console.log(destinationData);

    const res = await fetch("http://localhost:5000/destination", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(destinationData),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-24 px-6 sm:px-12 lg:px-24">
      <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-xl sm:p-12">
        <h1 className="mb-10 text-center text-4xl font-bold tracking-tight text-zinc-900">
          Add <span className="text-cyan-500">Destination</span>
        </h1>

        <form className="p-10 space-y-8" onSubmit={onSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Destination Name */}
            <div className="md:col-span-2">
              <TextField name="destinationName" isRequired>
                <Label>Destination Name</Label>
                <Input placeholder="Bali Paradise" className="rounded-2xl" />
                <FieldError />
              </TextField>
            </div>

            {/* Country */}
            <TextField name="country" isRequired>
              <Label>Country</Label>
              <Input placeholder="Indonesia" className="rounded-2xl" />
              <FieldError />
            </TextField>

            {/* Category */}
            <div>
              <Select
                name="category"
                isRequired
                className="w-full"
                placeholder="Select category"
              >
                <Label>Category</Label>
                <SelectTrigger className="rounded-2xl">
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
                  </ListBox>
                </SelectPopover>
              </Select>
            </div>

            {/* Price */}
            <TextField name="price" type="number" isRequired>
              <Label>Price (USD)</Label>
              <Input type="number" placeholder="1299" className="rounded-2xl" />
              <FieldError />
            </TextField>

            {/* Duration */}
            <TextField name="duration" type="number" isRequired>
              <Label>Duration (Days)</Label>
              <Input type="number" placeholder="7" className="rounded-2xl" />
              <FieldError />
            </TextField>

            {/* Departure Date */}
            <div className="md:col-span-2">
              <TextField name="departureDate" type="date" isRequired>
                <Label>Departure Date</Label>
                <Input type="date" className="rounded-2xl" />
                <FieldError />
              </TextField>
            </div>

            {/* Image URL - Removed preview */}
            <div className="md:col-span-2">
              <TextField name="imageUrl" isRequired>
                <Label>Image URL</Label>
                <Input
                  type="url"
                  placeholder="https://example.com/bali-paradise.jpg"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <TextField name="description" isRequired>
                <Label>Description</Label>
                <TextArea
                  placeholder="Describe the travel experience..."
                  className="rounded-3xl"
                />
                <FieldError />
              </TextField>
            </div>
          </div>

          {/* Buttons */}

          <Button
            type="submit"
            variant="outline"
            className=" rounded-lg w-full bg-cyan-500 text-white"
          >
            Add Destination
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddDestinationPage;
