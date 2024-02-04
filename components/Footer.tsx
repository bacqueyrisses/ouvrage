import Link from "next/link";

export default function Footer() {
  return (
    <div className={"text-center text-sm"}>
      <Link href={"https://www.enzo.codes"} target={"_blank"}>
        ✦ Made with love by Enzo ✦
      </Link>
    </div>
  );
}
