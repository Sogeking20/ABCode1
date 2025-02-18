import Service from "@/components/Services/Service";
import { notFound } from "next/navigation";
import ServicesItems from "@/data/service-items";

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const title = await params;
  console.log(title);
  const service = ServicesItems.find((service) => service.slug == title.slug);

  if (!service) {
    return notFound();
  }

  return <Service serviceData={service} />;
}
