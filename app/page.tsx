import { PortfolioHome } from "@/components/PortfolioHome";
import { getPublicRepositories } from "@/lib/github";

export const revalidate = 3600;

export default async function HomePage() {
  const repositories = await getPublicRepositories();
  return <PortfolioHome repos={repositories} />;
}
