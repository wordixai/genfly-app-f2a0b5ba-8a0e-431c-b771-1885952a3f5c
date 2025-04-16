import { Button } from "@/components/ui/button"

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">红色按钮示例</h1>
        <p className="text-xl text-gray-600 mb-6">这是一个简单的红色按钮组件</p>
        <Button variant="red" className="mx-auto">点击我</Button>
      </div>
    </div>
  );
};

export default Index;