import { api } from "./api";
interface PageData {
  slug: string;
  title: string;
  description: string;
  content: string;
}

/**
 * Fetch a page by slug
 */
// const BASEURL = process.env.Backend_API;

const BASEURL = "https://peaceful-approval-7a35c0f781.strapiapp.com/api/";
const token =
  "4a99a1cfd3bbb20f7d8d2296d80215c8a01d114c14f419d57b2f3c0a40fe71edd9c12f22cf8eea48600ee44728653e638cd410be93a64299a13c60a52bd0931799e8ac68c4ae0720a563c868feb4f2db8416164263e5310a4e458f912c243d2d00a6ae2d2c90e8369793feda51b1150e2c2117c34759a5ed2c085e4c682a84a1";
export async function getPage(slug: string): Promise<PageData | null> {
  try {
    const { data } = await api.get<PageData>(`${BASEURL}${slug}`, {
      headers: {
        Authorization: token ? `Bearer ${token}` : undefined,
        // Add other headers if needed
        "Content-Type": "application/json",
      },
    });
    return data;
  } catch (error) {
    console.error("GET page error:", error);
    return null;
  }
}

/**
 * Create a new page
 */
export async function createPage(page: PageData): Promise<PageData | null> {
  try {
    const { data } = await api.post<PageData>("/pages", page);
    return data;
  } catch (error) {
    console.error("POST page error:", error);
    return null;
  }
}

/**
 * Update an existing page by slug
 */
export async function updatePage(
  slug: string,
  page: Partial<PageData>
): Promise<PageData | null> {
  try {
    const { data } = await api.put<PageData>(`/pages/${slug}`, page);
    return data;
  } catch (error) {
    console.error("PUT page error:", error);
    return null;
  }
}

/**
 * Delete a page by slug
 */
export async function deletePage(slug: string): Promise<boolean> {
  try {
    await api.delete(`/pages/${slug}`);
    return true;
  } catch (error) {
    console.error("DELETE page error:", error);
    return false;
  }
}
