# 一个真实的调用智谱搜索的案例

## request:

```js
const options = {
  method: "POST",
  headers: {
    Authorization: "Bearer " + process.env.ZHIPU_API_KEY,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    search_query: "千问",
    search_engine: "search_std",
    search_intent: false,
    count: 10,
    // search_domain_filter: '<string>',
    search_recency_filter: "noLimit",
    content_size: "medium",
    // request_id: '<string>',
    // user_id: '<string>'
  }),
};

fetch("https://open.bigmodel.cn/api/paas/v4/web_search", options)
  .then((res) => res.json())
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
```

## response

```json5
{
  created: 1770732262,
  id: "2026021022042287a171dca3ec4f15",
  request_id: "2026021022042287a171dca3ec4f15",
  search_intent: [
    {
      intent: "SEARCH_ALWAYS",
      keywords: "千问 数学 运算",
      query: "千问",
    },
  ],
  search_result: [
    {
      content: "数据是个宝 数据宝 投资少烦恼 阿里巴巴方面最新消息显示，正式发布千问旗舰推理模型Qwen3-Max-Thinking。 据了解，通过总参数、强化学习、推理计算的规模扩展，千问新模型刷新了科学知识（GPQA Diamond）、数学推理（IMO-AnswerBench）、代码编程（LiveCodeBench）等多项关键性能基准测试的全球纪录。 千问最强模型出炉 1月27日早间，阿里云官方微信公众平台消息显示，阿里正式发布千问旗舰推理模型Qwen3-Max-Thinking。该模型总参数量超万亿（1T），预训练数据量高达36T Tokens，是目前阿里规模最大、能力最强的千问推理模型。 在涵盖事实知识、复杂推理、指令遵循、人类偏好对齐、Agent能力等19个公认的大模型基准测试中，千问旗舰推理模型刷新了数项最佳表现（SOTA）纪录，整体性能可媲美 GPT-5.2-Thinking-xhigh、Claude Opus 4.5 和 Gemini 3 Pro 。 与此同时，面向即将到来的智能体Agent时代，Qwen3-Max-Thinking也增强着自主调用工具的原生Agent能力。具体而言，在完成初步的工具使用微调后，阿里通义团队对模型进一步在大量多样化任务上，进行了基于规则奖励与模型奖励的联合强化学习训练，使得Qwen3-Max-Thinking拥有更智能结合工具进行思考的能力。 这种自适应的工具调用能力可在QwenChat上体验，模型自主选用搜索、个性化记忆和代码解释器等三个核心的Agent工具功能，模型幻觉也有所降低。 目前，开发者可在Q",
      icon: "https://sfile.chatglm.cn/searchImage/finance_eastmoney_com_icon_new.jpg",
      link: "https://finance.eastmoney.com/a/202601273631484126.html",
      media: "东方财富网",
      publish_date: "2026-01-27",
      refer: "ref_1",
      title: "阿里正式发布！千问最强模型来了（发布时间：2026-01-27 10:31:42）",
    },
    {
      content: "1月26日，阿里正式发布千问旗舰推理模型Qwen3-Max-Thinking，创下数项权威评测全球新纪录，性能媲美GPT-5.2、Gemini 3 Pro，成为迄今为止最接近国际顶尖模型的国内最强AI大模型。通过总参数、强化学习、推理计算的极致规模扩展，千问新模型实现了性能的大幅飞跃，刷新科学知识（GPQA Diamond）、数学推理（IMO-AnswerBench）、代码编程（LiveCodeBench）等多项关键性能基准测试的全球纪录。 Qwen3-Max-Thinking是目前阿里规模最大、能力最强的千问推理模型，其总参数量超万亿（1T），预训练数据量高达36T Tokens。此前，预览版Qwen3-Max-Thinking斩获数学推理AIME 25和HMMT 25的国内首个双满分，推理性能已让人惊艳；在此基础上，阿里通义团队进行了更大规模的强化学习后训练，全面提升了正式版Qwen3-Max-Thinking性能：在涵盖事实知识、复杂推理、指令遵循、人类偏好对齐、Agent能力等19个公认的大模型基准测试中，千问旗舰推理模型刷新了数项最佳表现（SOTA）纪录，整体性能可媲美GPT-5.2-Thinking-xhigh、Claude Opus 4.5和Gemini 3 Pro。 在关键的模型推理能力提升中，千问新模型采用了一种全新的测试时扩展（Test-timeScaling）机制，推理性能提升的同时还更经济。业界普遍的推理时计算，只会简单增加并行推理路径，重复推导已知结论，造成冗余推理效率低下；而千问采用的这一新机制，可对此前推理的",
      icon: "",
      link: "",
      media: "",
      publish_date: "2026-01-27",
      refer: "ref_2",
      title: "阿里发布千问旗舰推理模型，“迄今为止最接近国际顶尖模型的国内最强AI大模型”（发布时间：2026-01-27 11:59:26）",
    },
    {
      content: "站长之家（ChinaZ.com）1月27日 消息:阿里正式发布千问旗舰推理模型Qwen3-Max-Thinking，这一国内最强AI大模型在多项权威评测中创下全球新纪录。\nQwen3-Max-Thinking是阿里规模最大、能力最强的千问推理模型。其总参数量超万亿（1T），预训练数据量高达36T Tokens，如此庞大的规模为模型性能的飞跃奠定了坚实基础。通过总参数、强化学习、推理计算的极致规模扩展，该模型在科学知识(GPQA Diamond)、数学推理(IMO-AnswerBench)、代码编程(LiveCodeBench)等多项关键性能基准测试中刷新全球纪录，展现出强大的实力。\n此前，预览版Qwen3-Max-Thinking就已在数学推理领域崭露头角，斩获AIME25和HMMT25的国内首个双满分，其推理性能令人惊艳。在此基础上，阿里通义团队对正式版进行了更大规模的强化学习后训练，进一步提升了模型的整体性能。在涵盖事实知识、复杂推理、指令遵循、人类偏好对齐、Agent能力等19个公认的大模型基准测试中，千问旗舰推理模型刷新了数项最佳表现（SOTA）纪录，整体性能可与GPT-5.2-Thinking-xhigh、Claude Opus4.5和Gemini3Pro相媲美。\n在模型推理能力提升方面，千问新模型采用了全新的测试时扩展（Test-time Scaling）机制。传统的推理时计算往往简单增加并行推理路径，重复推导已知结论，导致冗余推理、效率低下。而千问的新机制可对之前推理的结果进行经验提取”式的提炼，并据此进行多轮自我迭代，在相同的上",
      icon: "https://sfile.chatglm.cn/searchImage/www_sohu_com_icon_new.jpg",
      link: "https://www.sohu.com/a/980761795_114774",
      media: "搜狐",
      publish_date: "2026-01-28",
      refer: "ref_3",
      title: "阿里千问最强模型Qwen3-Max-Thinking正式发布（发布时间：2026-01-28 00:18:00）",
    },
    // ...
  ],
}
```
