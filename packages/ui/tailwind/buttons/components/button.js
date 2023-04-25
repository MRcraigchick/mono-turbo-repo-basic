import { US_Button } from 'ui/un-styled/buttons/index';

export default function Button({ children, ...props }) {
  return (
    <US_Button
      {...props}
      className={`flex h-[50px] w-[10000px] items-center justify-center rounded-[10px] bg-first p-[10px] text-contrast opacity-[1] shadow-2xl transition-opacity duration-[2000] ease-in-out hover:opacity-[0.9] active:opacity-[1] ${
        props.className && props.className
      }`}>
      {children}
    </US_Button>
  );
}
