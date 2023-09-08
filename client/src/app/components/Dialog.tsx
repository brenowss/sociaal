import { AnimatePresence, motion } from 'framer-motion';
import { Transition } from '@headlessui/react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { clsx } from 'clsx';
import React, { Fragment, useState } from 'react';
import { X } from '@phosphor-icons/react';

interface DialogProps {
  trigger: React.ReactNode;
  title: string;
  children: React.ReactNode;
  description?: React.ReactNode;
}

const Dialog = ({ trigger, description, title, children }: DialogProps) => {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={setIsOpen}>
      <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>
      <DialogPrimitive.Portal forceMount>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 z-20 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className={clsx(
                'fixed z-50',
                'w-[95vw] max-w-md max-h-[90vh] overflow-auto custom-scrollbar rounded-lg p-4 md:w-full',
                'top-1/2 left-1/2',
                'bg-white',
                'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'
              )}
              initial={{ opacity: 0, y: '-50%', x: '-50%', scale: 0.8 }}
              animate={{ opacity: 1, y: '-50%', x: '-50%', scale: 1 }}
              exit={{ opacity: 0, y: '-50%', x: '-50%', scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <DialogPrimitive.Title className="text-2xl font-semibold text-gray-900">
                {title}
              </DialogPrimitive.Title>
              {description && (
                <DialogPrimitive.Description className="mt-1 text-md font-normal text-gray-600">
                  {description}
                </DialogPrimitive.Description>
              )}

              {children}

              <DialogPrimitive.Close
                className={clsx(
                  'absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1',
                  'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'
                )}
              >
                <X className="h-4 w-4 text-gray-500 hover:text-gray-700" />
              </DialogPrimitive.Close>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};

export { Dialog };
