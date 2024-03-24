import { Feature as FeatureType } from '../lib/types';
import { cn } from '../lib/utils';

type Props = {
  className?: string;
  feature: FeatureType;
  key?: number;
};

export default function Feature({ className, feature, key }: Props) {
  const { imgSrc, title, subTitle, description } = feature;

  return (
    <div
      key={key}
      className={cn(
        'flex flex-col w-[33%] max-md:ml-0 max-md:w-full items-center text-white',
        className
      )}
    >
      <img
        loading='lazy'
        src={imgSrc}
        className='self-center max-w-full aspect-[1.12] w-[154px]  animate-spin-slow hover:[animation-play-state:paused]'
      />
      <span className='mt-6 text-5xl tracking-tight'>{title}</span>
      <span className='text-2xl'>{subTitle}</span>
      {description ? <span className='text-2xl'>{description}</span> : <></>}
    </div>
  );
}
