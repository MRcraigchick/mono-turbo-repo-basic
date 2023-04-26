import { PageLayout } from '@/components/shared/containers/containers';
import { Button } from 'ui/tailwind/buttons/index';

export default function Index() {
  return (
    <PageLayout
      mainContainerClass=''
      navbar={true}>
      <div className='scrollbar-none header'>
        <h1 className='red-text text-7xl font-bold'>Mono Repo</h1>
        <Button
          href='/about'
          className='mx-auto max-w-[200px]'>
          Button Link
        </Button>
      </div>
    </PageLayout>
  );
}
