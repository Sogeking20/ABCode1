"use client";

import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { TFormLoginValues, formLoginSchema } from "@/components/Form/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormInput } from "@/components/ui/form-input";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { sendMessage } from "@/app/actions";

interface Props {
  onClose?: VoidFunction;
}

export const CallForm: React.FC<Props> = ({ onClose }) => {
  const form = useForm<TFormLoginValues>({
    resolver: zodResolver(formLoginSchema),
    defaultValues: {
      name: "",
      phoneOrEmail: "",
    },
  });

  const onSubmit = async (data: TFormLoginValues) => {
    try {
      const message = `
Имя: ${data.name}
Почта или номер: ${data.phoneOrEmail}
Описание: ${data.description}`;
      const resp = await sendMessage(message);

      if (!resp?.ok) {
        throw Error();
      }

      toast.success("Запрос отправлен", {
        icon: "✅",
      });
    } catch (error) {
      console.error("Error [LOGIN]", error);
      toast.error("Не удалось отправить запрос", {
        icon: "❌",
      });
    }
  };

  return (
    <FormProvider {...form}>
      <form
        className="flex flex-col gap-5"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="w-full flex gap-5">
          <FormInput
            className="w-[50%]"
            name="name"
            placeholder="Ваше имя"
            required
          />
          <FormInput
            className="w-[50%]"
            name="phoneOrEmail"
            placeholder="Телефон или почта"
            required
          />
        </div>
        <FormInput placeholder="Сообщение" name="description" required />

        <Button
          loading={form.formState.isSubmitting}
          className="h-12 text-base text-white border-[2px] border-white"
          type="submit"
          variant={"outline"}
        >
          Отправить
        </Button>
      </form>
    </FormProvider>
  );
};
