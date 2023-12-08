import { icons } from 'lucide-react';

const Icon = ({ name, color, size, fill='transparent'}) => {
  const LucideIcon = icons[name];

  return (
    <>
      <LucideIcon color={color} fill={fill}  size={size} />
    </>
  )
};

export default Icon;
