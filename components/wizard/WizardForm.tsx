"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { User } from "@prisma/client";
import { useMutation, useQuery } from "@tanstack/react-query";
import React from "react";
import { CreateUserSchool } from "./_actions/createSchool";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { WizardFormSchema } from "@/schema/WizardFormSchema";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";
import { Input } from "../ui/input";

const userTypes = [{ label: "School Body", value: "school" }] as const;

const WizardForm = () => {
  const router = useRouter();

  const userInfo = useQuery<User>({
    queryKey: ["getting-user-info"],
    queryFn: () => fetch("/api/get-user").then((res) => res.json()),
  });

  const mutation = useMutation({
    mutationFn: CreateUserSchool,
    onMutate: () => {
      toast.loading("Updating User's School...");
    },
    onSuccess: () => {
      // Handle success, e.g., show a success message or refetch user info
      toast.dismiss();
      toast.success("User info updated successfully");
      router.push("/get-started");
    },
    onError: (error) => {
      // Handle error, e.g., show an error message
      toast.dismiss();
      toast.error("Error updating user info:" + error);
    },
  });

  const form = useForm<z.infer<typeof WizardFormSchema>>({
    resolver: zodResolver(WizardFormSchema),
  });

  const onSubmit = (data: z.infer<typeof WizardFormSchema>) => {
    console.log("Form submitted");
    mutation.mutate(data)
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Field */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-md">School Name</FormLabel>
              <FormControl>
                <Input type="name" placeholder="Your School's Name" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />

        {/* User Type Field */}
        <FormField
          control={form.control}
          name="userType"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mr-4">User Type</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-[200px] justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? userTypes.find((type) => type.value === field.value)
                            ?.label
                        : "Select user type"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput placeholder="Search user type..." />
                    <CommandList>
                      <CommandEmpty>No user type found.</CommandEmpty>
                      <CommandGroup>
                        {userTypes.map((type) => (
                          <CommandItem
                            value={type.label}
                            key={type.value}
                            onSelect={() => {
                              form.setValue("userType", type.value);
                            }}
                          >
                            {type.label}
                            <Check
                              className={cn(
                                "ml-auto",
                                type.value === field.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormDescription>
                Select the type of user account.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={mutation.isPending}>Submit</Button>
      </form>
    </Form>
  );
};

export default WizardForm;
