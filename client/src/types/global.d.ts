declare global {
  type User = {
    id: string;
    email: string;
    fullName?: string;
    imageUrl?: string;
    name?: string;
    image?: string;
  };

  type Message = {
    id: string;
    role: any;
    content: string;
    timestamp: string;
  };

  type Version = {
    id: string;
    timestamp: string;
    code: string;
  };

  type Project = {
    id: string;
    name: string;
    initial_prompt: string;
    current_code: string;
    createdAt: string;
    updatedAt: string;
    userId: string;
    user?: User;
    isPublished?: boolean;
    versionId?: string;
    conversation: Message[];
    versions: Version[];
    current_version_index: string;
  };
}

export {};
