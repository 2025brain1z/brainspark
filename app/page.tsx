import { redirect } from "next/navigation";

export default function Home() {
  redirect("/Home"); // Automatically redirects to the Profile page
}
