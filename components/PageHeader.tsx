import Image from "next/image";

type PageHeaderType = {
  children: string;
  icon: string;
  type?: "large" | "small";
};

export default function PageHeader({
  children,
  icon,
  type = "large",
}: PageHeaderType) {
  return (
    <div className="flex items-center gap-5 mg:gap-6 xl:gap-[30px]">
      <Image
        src={icon}
        alt="page icon"
        width={type === "large" ? 59 : 45}
        height={type === "large" ? 59 : 45}
      />
      <h2
        className={`text-[#FFFFFF] ${
          type === "large"
            ? "text-4xl leading-[50.4px]"
            : "text-[20px] leading-[28px] lg:text-[28px] lg:leading-[32px] xl:text-[32px] xl:leading-[44.8px]"
        } font-semibold`}
      >
        {children}
      </h2>
    </div>
  );
}
