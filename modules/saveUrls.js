class SaveUrls {
  baseUrl = "http://localhost:3000";

  getSaves(status) {
    if (status) {
      return `${this.baseUrl}/saves?status=${status}`;
    }
    return `${this.baseUrl}/saves`;
  }

  getSaveById(id) {
    return `${this.baseUrl}/saves/${id}`;
  }

  createSave() {
    return `${this.baseUrl}/saves`;
  }

  removeSaveById(id) {
    return `${this.baseUrl}/saves/${id}`;
  }

  updateSaveById(id) {
    return `${this.baseUrl}/saves/${id}`;
  }
}

export const saveUrls = new SaveUrls();
