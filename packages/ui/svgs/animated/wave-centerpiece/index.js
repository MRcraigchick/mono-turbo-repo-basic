import styles from './styles.module.css';
import Image from 'next/image';

export default function Wave({ ...props }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 1196 774'
      className={`${styles.backwardAnimation}`}>
      <path d='M1195.31 191.87C1170.17 210.407 1070.46 272.041 858.55 269.96C742.384 268.819 698.983 241.615 654.331 213.629C603.155 181.553 550.337 148.447 384.451 152.371C114.616 158.759 20.5898 33.8881 0.548584 0.983215L0.548584 637.546C46.0909 611.022 145.411 568.77 320.699 564.39C440.667 561.393 486.577 586.756 533.808 612.849C587.94 642.755 643.81 673.62 814.9 663.848C1040.05 650.983 1149.9 727.174 1195.31 773.599V191.87Z' />
      <g className='h-[500px] w-[100%]'>
        <Image
          src='/images/gradients/gradient-2.png'
          alt='Wave centerpiece gradient'
          width='2000'
          height='2000'
        />
      </g>
    </svg>
  );
}
