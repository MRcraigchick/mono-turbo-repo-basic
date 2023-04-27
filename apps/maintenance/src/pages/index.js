import { PageLayout } from 'ui/un-styled/containers';
import { ViewboxImage } from 'ui/tailwind/images';
import { Wave } from 'ui/svgs/animated';

export default function Index() {
  return (
    <PageLayout
      title='Yasha'
      mainContainerClass='overflow-x-hidden'>
      {/* <ViewboxImage
        viewboxProps={{
          className: '',
        }}
        imageProps={{
          src: '/images/gradients/gradient-1.png',
          alt: 'Background gradient',
        }}
      /> */}
      <div className='h-[500px]'></div>
      <Wave />
      <div className='h-[500px]'></div>
    </PageLayout>
  );
}
