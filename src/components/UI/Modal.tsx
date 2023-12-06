import Card from "@/components/UI/Card.server";

const Modal = () => {
  return (
    <div className="absolute w-screen h-screen z-0 bg-background">
      <div className="w-3/4 h-full bg-text text-background">
        <Card>
            <h1>API Server With CRUD Capabilities</h1>
        </Card>
      </div>
    </div>
  );
};

export default Modal;
