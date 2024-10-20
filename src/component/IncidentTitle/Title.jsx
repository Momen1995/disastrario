const Title = () => {
  return (
    <div className="w-full max-w-md mx-auto mt-8 space-y-6 px-4">
      <div>
        <h3 className="text-primary font-bold text-[20px] sm:text-[24px]">
          Let’s give the incident a title?
        </h3>
        <p className="text-sm text-secondary">
          Make a title that will easily identify the incidents
        </p>
      </div>

      <input
        type="text"
        placeholder="Add title here"
        className="text-[#71717a] text-[12px] px-3 py-2 w-full outline-0 bg-[#e4e4e7] rounded"
      />

      <div className="space-y-1">
        <h3 className="text-primary font-bold text-[20px] sm:text-[24px]">
          Describe what happened during the incident?
        </h3>
        <p className="text-sm text-secondary">
          Share some information about the incident. The when, where, how.
        </p>
        <textarea
          rows={4}
          className="bg-[#e4e4e7] p-3 text-[12px] text-[#71717a] w-full"
        >
          type here
        </textarea>
      </div>
    </div>
  );
};

export default Title;
