interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <aside>
    {message}
    {/* <style jsx>{`
      aside {
        padding: 1.5em;
        font-size: 14px;
        color: white;
        background-color: red;
      }
    `}</style> */}
  </aside>
);

export default ErrorMessage;
