import { FC } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Props {
  className?: string;
}

const faq = [
  {
    question: "Как узнать стоимость работ?",
    answer: `Чтобы рассчитать стоимость работы необходимо связаться с нами и рассказать о своёи проекте. После этого мы мы внимательно изучим ваше техническое задание и назовём цену`,
  },
  {
    question: "Как узнать стоимость работ?",
    answer: `Чтобы рассчитать стоимость работы необходимо связаться с нами и рассказать о своёи проекте. После этого мы мы внимательно изучим ваше техническое задание и назовём цену`,
  },
  {
    question: "Как узнать стоимость работ?",
    answer: `Чтобы рассчитать стоимость работы необходимо связаться с нами и рассказать о своёи проекте. После этого мы мы внимательно изучим ваше техническое задание и назовём цену`,
  },
];

const ServiceFaq: FC<Props> = ({ className }) => {
  return (
    <div className="mb-[100px]">
      <h3 className="text-[30px] uppercase sm:text-[40px] text-[#0020a7] text-center mb-5">
        Часто задаваемые вопросы
      </h3>
      <Accordion className="flex flex-col gap-3" type="single" collapsible>
        {faq.map(({ question, answer }, id) => (
          <AccordionItem key={id} value={String(id)}>
            <AccordionTrigger>{question}</AccordionTrigger>
            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default ServiceFaq;
