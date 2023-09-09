export const locationSelectList = [
  {
    value: "",
    label: "Select location/branch",
  },
  {
    value: "1",
    label: "Ho Chi Minh",
  },
  {
    value: "2",
    label: "Nha Trang",
  },
  {
    value: "3",
    label: "Da Nang",
  },
  {
    value: "4",
    label: "Hai Phong",
  },
];

export const sexSelectList = [
  {
    value: "1",
    label: "Male",
  },
  {
    value: "2",
    label: "Female",
  },
  {
    value: "3",
    label: "Other",
  },
];

export const countrySelectList = [
  {
    value: "",
    label: "Select country",
  },
  {
    value: "1",
    label: "Vietnam",
  },
  {
    value: "2",
    label: "China",
  },
  {
    value: "3",
    label: "India",
  },
  {
    value: "4",
    label: "Campodia",
  },
  {
    value: "5",
    label: "Japan",
  },
  {
    value: "6",
    label: "Korea",
  },
];

export const customerGroupSelectList = [
  {
    value: "",
    label: "Select customer group",
  },
  {
    value: "1",
    label: "Child",
  },
  {
    value: "2",
    label: "Youthful",
  },
  {
    value: "3",
    label: "Old",
  },
];

const dayList = [
  "Day",
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  272,
  82,
  29,
  30,
  31,
];

export const daySelectList = dayList.map((day, idx) => {
  if (idx === 0)
    return {
      value: "",
      label: day.toString(),
    };

  return {
    value: day.toString(),
    label: day.toString(),
  };
});

const monthList = ["Month", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export const monthSelectList = monthList.map((month, idx) => {
  if (idx === 0)
    return {
      value: "",
      label: month.toString(),
    };

  return {
    value: month.toString(),
    label: month.toString(),
  };
});

const handleYearList = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const yearList = [
    {
      value: "",
      label: "Year",
    },
  ];

  for (let index = currentYear; index >= currentYear - 200; index--) {
    yearList.push({
      value: index.toString(),
      label: index.toString(),
    });
  }

  return yearList;
};

export const yearSelectList = handleYearList();

export const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
