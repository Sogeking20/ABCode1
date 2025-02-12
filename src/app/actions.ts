const baseUrl =
  "https://api.telegram.org/bot7596177199:AAGdEekUXoJcr9n8CsSx7j5QkCW2VREn2Do/";

export const sendMessage = async (
  message: string
): Promise<{ ok: boolean; error?: string; data?: any }> => {
  const url = `${baseUrl}sendMessage?chat_id=-4652525676&text=${encodeURIComponent(
    message
  )}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.ok) {
      return {
        ok: true,
        data: {
          messageId: data.result.message_id,
          timestamp: data.result.date,
        },
      };
    } else {
      return {
        ok: false,
        error: data.description,
      };
    }
  } catch (err) {
    return {
      ok: false,
      error: "Произошла ошибка при отправке сообщения.",
    };
  }
};
