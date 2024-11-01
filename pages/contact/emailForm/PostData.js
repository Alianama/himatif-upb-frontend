import api from "@/config/api";

const postData = async (data) => {
  try {
    const response = await fetch(`${api}/email/send-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};

export default postData;
