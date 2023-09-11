class HttpClient {
  baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async get(path: string) {
    const response = await fetch(`${this.baseURL}${path}`);

    const contentType = response.headers.get('Content-Type');
    let body = null;

    if (contentType?.includes('application/json')) {
      body = await response.json();
    }

    if (response.ok) {
      return body;
    }

    throw new Error(body?.message);
  }

  async post(path: string, body: any) {
    const response = await fetch(`${this.baseURL}${path}`, {
      method: 'POST',
      body: JSON.stringify(body),
    });
    return response.json();
  }
}

export default HttpClient;
