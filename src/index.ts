type FormatDate = (date: Date) => string;
export const formatDate: FormatDate = (date) => {
  return `${getMonth(
    date.getMonth()
  )} ${date.getDate()}, ${date.getFullYear()}`;
};

type GetMonth = (month: number) => string;
export const getMonth: GetMonth = (month) => {
  switch (month) {
    case 0:
      return "january";
    case 1:
      return "february";
    case 2:
      return "march";
    case 3:
      return "april";
    case 4:
      return "may";
    case 5:
      return "june";
    case 6:
      return "july";
    case 7:
      return "august";
    case 8:
      return "september";
    case 9:
      return "october";
    case 10:
      return "november";
    case 11:
      return "december";
    default:
      return "";
  }
};
