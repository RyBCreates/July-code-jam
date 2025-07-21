export const generateOptimizedRoute = async (locations) => {
  try {
    const res = await fetch("/coloRUSH/api/route/optimize", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ locations }),
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message || "Failed to optimize route");
    }

    return await res.json();
  } catch (error) {
    console.error("Error optimizing route:", error.message);
    throw error;
  }
};
