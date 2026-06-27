import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { OrnamentalSectionTitle, NumberMedallion } from '../ui';
import { content } from '../../data/content';

export function QuizSection() {
  const data = content.quiz;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleSelectAnswer = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);

    if (currentQuestion < data.questions.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 500);
    } else {
      setTimeout(() => setShowResults(true), 500);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
  };

  const correctCount = selectedAnswers.filter(
    (answer, index) => answer === data.questions[index].correct
  ).length;

  if (showResults) {
    return (
      <section
        className="py-16 md:py-24 px-4 relative"
        style={{
          background: 'linear-gradient(180deg, #FBE8C2 0%, #F0D7AB 50%, #DEBA8A 100%)',
        }}
        id="quiz"
      >
        <div className="container mx-auto max-w-4xl">
          <motion.div
            className="vintage-border bg-paper-light p-8 md:p-12 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <h3 className="text-3xl md:text-4xl font-display font-bold text-burgundy mb-6">
              Kết quả kiểm tra
            </h3>

            <div className="mb-8">
              <div className="inline-block medallion w-24 h-24 text-3xl mb-4">
                {correctCount}/{data.questions.length}
              </div>
              <p className="text-ink-dark font-body text-lg">
                Bạn đã trả lời đúng {correctCount} trên {data.questions.length} câu hỏi
              </p>
            </div>

            <div className="mb-8">
              {correctCount === data.questions.length ? (
                <div className="bg-burgundy text-gold-light px-6 py-3 font-display font-bold text-xl border-2 border-gold-antique inline-block">
                  XUẤT SẮC 🎖️
                </div>
              ) : correctCount >= 3 ? (
                <div className="bg-moss text-gold-light px-6 py-3 font-display font-bold text-xl border-2 border-gold-antique inline-block">
                  TỐT
                </div>
              ) : (
                <div className="bg-paper-muted text-ink-dark px-6 py-3 font-display font-bold text-xl border-2 border-gold-dark inline-block">
                  CẦN HỌC THÊM
                </div>
              )}
            </div>

            <button
              onClick={resetQuiz}
              className="stamp-button text-gold-light hover:text-gold-light focus-vintage"
            >
              Làm lại bài kiểm tra
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  const question = data.questions[currentQuestion];

  return (
    <section
      className="py-16 md:py-24 px-4 relative border-t-4 border-b-4 border-border-brown"
      style={{
        background: 'linear-gradient(180deg, #DEBA8A 0%, #F0D7AB 50%, #FBE8C2 100%)',
      }}
      id="quiz"
    >
      <div className="container mx-auto max-w-4xl">
        <OrnamentalSectionTitle label={data.label} title={data.title} />

        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-2">
            {data.questions.map((_, index) => (
              <div
                key={index}
                className={`w-4 h-4 rounded-full border-2 ${
                  index < currentQuestion
                    ? 'bg-burgundy border-burgundy'
                    : index === currentQuestion
                    ? 'bg-gold-antique border-burgundy'
                    : 'bg-paper-muted border-gold-dark'
                }`}
              />
            ))}
            <div className="ml-4 text-ink-dark font-body text-sm">
              Câu {currentQuestion + 1}/{data.questions.length}
            </div>
          </div>
        </div>

        {/* Question Panel */}
        <div className="vintage-border bg-paper-light p-6 md:p-10">
          <div className="flex items-start gap-4 mb-8">
            <NumberMedallion number={currentQuestion + 1} size="lg" />
            <h4 className="text-lg md:text-xl font-body text-ink-dark leading-relaxed flex-1">
              {question.question}
            </h4>
          </div>

          {/* Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AnimatePresence mode="wait">
              {question.options.map((option, index) => (
                <motion.button
                  key={`${currentQuestion}-${index}`}
                  onClick={() => handleSelectAnswer(index)}
                  className={`p-4 text-left font-body text-sm md:text-base transition-all border-2 ${
                    selectedAnswers[currentQuestion] === index
                      ? 'bg-gold-antique/30 border-burgundy'
                      : 'bg-paper-muted border-gold-dark hover:border-burgundy hover:bg-paper-light'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-3">
                    <span className="medallion w-8 h-8 text-sm">{['A', 'B', 'C', 'D'][index]}</span>
                    <span className="text-ink-dark">{option}</span>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
