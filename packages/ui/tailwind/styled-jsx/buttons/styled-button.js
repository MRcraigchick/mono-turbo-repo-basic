import DefaultButton from "ui/atoms/buttons/default"

export default function StyledButton({ children, ...props }) {
  return (
    <DefaultButton {...props} className=" h-[100px] bg-[black] text-[white]">
      {children}
    </DefaultButton>
  )
}
