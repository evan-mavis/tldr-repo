import ExampleCards from "@/components/ExampleCards";
import HomeHeaderContent from "@/components/HomeHeaderContent";
import RepoInput from "@/components/RepoInput";

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-150px)] flex-col items-center justify-center px-4">
      <HomeHeaderContent />
      <RepoInput />
      <ExampleCards />
    </div>
  );
}
