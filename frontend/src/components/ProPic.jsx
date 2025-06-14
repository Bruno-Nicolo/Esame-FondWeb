import Avatar from "@mui/material/Avatar";

export function Propic({ name, surname, headerSection = false }) {
  const getInitials = () => {
    const first = name.charAt(0).toUpperCase();
    const second = surname.charAt(0).toUpperCase();

    return `${first}${second}`;
  };

  return (
    <Avatar
      sx={
        headerSection
          ? {
              bgcolor: "#CC3F0C",
            }
          : {
              bgcolor: "#CC3F0C",
              width: 72,
              height: 72,
              fontSize: "2em",
            }
      }
    >
      {getInitials()}
    </Avatar>
  );
}
