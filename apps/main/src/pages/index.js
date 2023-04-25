import { PageLayout } from "@/components/shared/containers/containers"
import StyledButton from "ui/tailwind/styled-jsx/buttons/styled-button"

export default function Index() {
  return (
    <PageLayout mainContainerClass="" navbar={true}>
      <div className="scrollbar-none header">
        <h1 className="blue-text text-7xl font-bold">Hello</h1>
        <StyledButton>Hello</StyledButton>
      </div>
    </PageLayout>
  )
}
