import { MdMyLocation, MdEmail, MdComputer } from "react-icons/md";
import { RiLinkedinBoxFill, RiBookmark3Fill } from "react-icons/ri";
import {
  VscDebugBreakpointLog,
  VscDebugBreakpointLogUnverified,
} from "react-icons/vsc";

export const contactMe = (color) => {
  return [
    {
      icon: <MdMyLocation color={color} size={24} />,
      placeholder: "Location",
    },
    {
      icon: <MdEmail color={color} size={24} />,
      placeholder: "Email",
    },
    {
      icon: <MdComputer color={color} size={24} />,
      placeholder: "Site",
    },
    {
      icon: <RiLinkedinBoxFill color={color} size={24} />,
      placeholder: "LinkedIn",
    },
  ];
};

export const skillsFields = (color) => {
  return [
    {
      icon: <VscDebugBreakpointLogUnverified color={color} size={16} />,
      iconMarked: <VscDebugBreakpointLog color={color} size={16} />,
      placeholder: "Skill",
      stars: 3,
    },
    {
      icon: <VscDebugBreakpointLogUnverified color={color} size={16} />,
      iconMarked: <VscDebugBreakpointLog color={color} size={16} />,
      placeholder: "Skill",
      stars: 2,
    },
    {
      icon: <VscDebugBreakpointLogUnverified color={color} size={16} />,
      iconMarked: <VscDebugBreakpointLog color={color} size={16} />,
      placeholder: "Skill",
      stars: 1,
    },
    {
      icon: <VscDebugBreakpointLogUnverified color={color} size={16} />,
      iconMarked: <VscDebugBreakpointLog color={color} size={16} />,
      placeholder: "Skill",
      stars: 3,
    },
    {
      icon: <VscDebugBreakpointLogUnverified color={color} size={16} />,
      iconMarked: <VscDebugBreakpointLog color={color} size={16} />,
      placeholder: "Skill",
      stars: 2,
    },
  ];
};

export const awardsReceived = (color) => {
  return [
    {
      icon: <RiBookmark3Fill color={color} size={24} />,
      placeholder: "Award",
    },
    {
      icon: <RiBookmark3Fill color={color} size={24} />,
      placeholder: "Award",
    },
    {
      icon: <RiBookmark3Fill color={color} size={24} />,
      placeholder: "Award",
    },
  ];
};
