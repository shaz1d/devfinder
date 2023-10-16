type ContainerProps = {
  children: React.ReactNode;
};
const Container = ({ children }: ContainerProps) => {
  return <div className="w-full max-w-2xl mx-auto">{children}</div>;
};

export default Container;
