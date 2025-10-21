import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewMessages, getAllMessages } from "../redux/actions/messages.actions";
import MessagesSkeleton from "../components/LoadingSkeleton";

function Matryrs() {
  const dispatch = useDispatch();
  const { messages, error, loading } = useSelector((state) => state.messages);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    body: "",
    email: "",
    reason: "support",
  });

  useEffect(() => {
    dispatch(getAllMessages());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewMessages(formData));
    setFormData({ name: "", body: "", email: "", reason: "support" });
    setShowForm(false);
  };

  return (
    <div className="relative bg-black text-white min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-700 via-black to-red-700 opacity-50"></div>

      {/* Optional flag overlay pattern */}
      <div className="absolute inset-0 bg-[url('/images/palestine-flag-overlay.png')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 opacity-10">
        {/* Optional: A subtle background pattern could go here, e.g., a SVG pattern */}
      </div>
      <div className="relative container mx-auto px-4 py-16">
        <header className="text-center mb-12">
          <h1 className="mt-10 text-4xl md:text-6xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-white">
            Wall of Remembrance
          </h1>
          <p className="text-lg text-gray-400">
            Honoring the Martyrs of Palestine 🇵🇸
          </p>
        </header>

        <div className="max-w-4xl mx-auto">
          <div className="text-right mb-8">
            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-green-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-green-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              {showForm ? "Close Form" : "Add Your Message"}
            </button>
          </div>

          {showForm && (
            <form
              onSubmit={handleSubmit}
              className="bg-gray-900 p-8 rounded-2xl shadow-2xl mb-12 border border-gray-700"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-gray-800 text-white p-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-gray-800 text-white p-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div className="mt-6">
                <select
                  value={formData.reason}
                  onChange={(e) =>
                    setFormData({ ...formData, reason: e.target.value })
                  }
                  className="w-full bg-gray-800 text-white p-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="support">Support for Palestine 🇵🇸</option>
                  <option value="solidarity">Solidarity with Martyrs ✊</option>
                  <option value="hope">A message of hope 💫</option>
                  <option value="freedom">For Freedom 🕊️</option>
                  <option value="prayer">Prayer for the people 🤲</option>
                </select>
              </div>
              <div className="mt-6">
                <textarea
                  placeholder="Write your message here..."
                  value={formData.body}
                  onChange={(e) =>
                    setFormData({ ...formData, body: e.target.value })
                  }
                  className="w-full bg-gray-800 text-white p-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                  rows="5"
                  required
                />
              </div>
              <div className="mt-8 text-center">
                <button
                  type="submit"
                  className="bg-red-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-red-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                >
                  Send Message 💌
                </button>
              </div>
            </form>
          )}

          {loading && (
            <MessagesSkeleton />
          )}
          {error && (
            <p className="text-center text-red-500 text-lg">Error: {error}</p>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 md:gap-8">
            {messages && messages.length > 0 ? (
              messages.map((msg) => (
                <article
                  key={msg._id}
                  className="bg-gray-900 border border-gray-700 rounded-2xl p-6 shadow-lg transition-transform transform hover:-translate-y-1 hover:shadow-green-500/20"
                >
                  <header className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center mr-4">
                      <span className="text-xl font-bold text-green-400">
                        {msg.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-green-400">
                        {msg.name}
                      </h2>
                      <p className="text-sm text-gray-500">
                        Category: {msg.reason}
                      </p>
                    </div>
                  </header>
                  <p className="text-gray-300 leading-relaxed">{msg.body}</p>
                </article>
              ))
            ) : (
              !loading && (
                <div className="text-center py-16">
                  <p className="text-gray-500 text-xl">
                    No messages have been shared yet. Be the first.
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Matryrs;
