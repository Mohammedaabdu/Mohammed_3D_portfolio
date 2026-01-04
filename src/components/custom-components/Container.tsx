interface containerProps {
  children?: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: containerProps) => {
  return (
    <div className={`px-6 py-4 mx-auto max-w-7xl md:px-8 ${className ?? ""}`}>
      {children}
    </div>
  );
};

export default Container;
