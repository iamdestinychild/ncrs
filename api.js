import axios from 'axios'
const NEXT_PUBLIC_API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT

export async function getAllProject(lim) {
    const result = await axios.get(`${NEXT_PUBLIC_API_ENDPOINT}/project/?lim=${lim}`)
    return result.data
}

export async function getProjectImages(slug) {
    try {
        const response = await axios.get(
          `${NEXT_PUBLIC_API_ENDPOINT}/project/image/${slug}`,
          {
            responseType: "blob",
            withCredentials: true,
          }
        );
    
        const blob = response?.data;
        const objectUrl = URL.createObjectURL(blob);
        return objectUrl;
      } catch (err) {
        throw new Error(err.message);
    }
}

export async function getProject(slug) {
    const result = await axios.get(`${NEXT_PUBLIC_API_ENDPOINT}/project/${slug}`)
    return result.data
}

export async function getAllNews(lim) { 
    const result = await axios.get(`${NEXT_PUBLIC_API_ENDPOINT}/news/?lim=${lim}`)
    return result.data
}


export async function getNewsBySlug(slug) {
    const result = await axios.get(`${NEXT_PUBLIC_API_ENDPOINT}/news/${slug}`)
    return result.data
}

export async function getNewsImage(slug) {
    try {
        const response = await axios.get(
          `${NEXT_PUBLIC_API_ENDPOINT}/news/news-image/${slug}`,
          {
            responseType: "blob",
            withCredentials: true,
          }
        );
    
        const blob = response?.data;
        const objectUrl = URL.createObjectURL(blob);
        return objectUrl;
      } catch (err) {
        throw new Error(err.message);
    }
}

export async function getAllGalleryPost() {
    const result = await axios.get(`${NEXT_PUBLIC_API_ENDPOINT}/gallery/`)
    return result.data
}

export async function getGalleryPostImg(slug) {
  const result = await axios.get(`${NEXT_PUBLIC_API_ENDPOINT}/gallery/image/${slug}`)
  return result.data
}

export async function getAllDownloadables() {
  const result = await axios.get(`${NEXT_PUBLIC_API_ENDPOINT}/downloadables/`)
  console.log(result.data)
  return result.data
}

export async function downloadDownloadable(slug) {
  try {
    const response = await axios.get(
      `${NEXT_PUBLIC_API_ENDPOINT}/downloadables/download/${slug}`,
      { responseType: "blob", withCredentials: true }
    );
    const contentType = response.headers["content-type"];

    const fileName = `${slug}`;

    const blob = new Blob([response.data], { type: contentType });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
    return response.status;
  } catch (error) {
    console.error("Error downloading file:", error);
  }
}
