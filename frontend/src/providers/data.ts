import { BaseRecord, DataProvider, GetListParams, GetListResponse } from "@refinedev/core";

interface Subject extends BaseRecord {
  id: number;
  courseCode: string;
  name: string;
  department: string;
  description: string;
}

const MOCK_SUBJECTS: Subject[] = [
  {
    id: 1,
    courseCode: "PH101",
    name: "Physics",
    department: "Physical Sciences",
    description:
        "Fundamentals of classical mechanics, thermodynamics, waves, and electromagnetism with an introduction to modern physics concepts.",
  },
  {
    id: 2,
    courseCode: "CH101",
    name: "Chemistry",
    department: "Chemical Sciences",
    description:
        "Covers atomic structure, chemical bonding, stoichiometry, reaction kinetics, and an introduction to organic and inorganic chemistry.",
  },
  {
    id: 3,
    courseCode: "BI101",
    name: "Bio",
    department: "Life Sciences",
    description:
        "Introduces cell biology, genetics, evolution, ecology, and the molecular basis of life including DNA replication and protein synthesis.",
  },
  {
    id: 4,
    courseCode: "MA101",
    name: "Math",
    department: "Mathematics",
    description:
        "Foundations of calculus, linear algebra, and probability theory with applications to engineering and the sciences.",
  },
];

export const dataProvider: DataProvider = {
  getList: async <TData extends BaseRecord = BaseRecord>({
                                                           resource,
                                                         }: GetListParams): Promise<GetListResponse<TData>> => {
    if (resource !== "subjects") return { data: [] as TData[], total: 0 };

    return {
      data: MOCK_SUBJECTS as unknown as TData[],
      total: MOCK_SUBJECTS.length,
    };
  },
  getOne: async () => { throw new Error("This function is not present in mock") },
  create: async () => { throw new Error("This function is not present in mock") },
  update: async () => { throw new Error("This function is not present in mock") },
  deleteOne: async () => { throw new Error("This function is not present in mock") },
  getApiUrl: () => "",
};