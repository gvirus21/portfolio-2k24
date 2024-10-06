interface AnimatedButtonProps {
    className: string;
    children: React.ReactNode;
  }
  
  export const AnimatedButton: React.FC<AnimatedButtonProps> = ({ className, children }) => (
    <button className={className}>{children}</button>
  );
  
  export const ContactHeader: React.FC = () => (
    <h2 className="text-7xl font-medium capitalize">
      Let&apos;s Work Together
    </h2>
  );

  export default AnimatedButton;