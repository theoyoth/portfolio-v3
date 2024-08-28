import * as runtime from 'react/jsx-runtime';
import Image from 'next/image';


// parse the Velite generated MDX code into a React component function
const useMDXComponent = (code: string) => {
  const fn = new Function(code)
  return fn({ ...runtime }).default
}

const components = {
  Image,
};

type MDXProps = {
  code: string
}

// MDXContent component
export const MDXContent = ({ code }: MDXProps) => {
  const Component = useMDXComponent(code)
  return <Component components={components} />
}