'use client';
import Container from './container';

export default function SectionTitle(props) {
  return (
    <div
      className={`mt-4 flex w-full flex-col ${
        props.align === 'left' ? '' : 'items-center justify-center text-center'
      }`}
    >
      {props.pretitle && (
        <div className="text-md font-bold uppercase tracking-wider">
          {props.pretitle}
        </div>
      )}

      {props.title && (
        <h2 className="mt-3 max-w-2xl text-3xl font-bold leading-snug tracking-tight lg:text-4xl lg:leading-tight">
          {props.title}
        </h2>
      )}

      {props.children && (
        <p className="max-w-2xl py-4 text-lg leading-normal lg:text-xl xl:text-xl">
          {props.children}
        </p>
      )}
    </div>
  );
}
