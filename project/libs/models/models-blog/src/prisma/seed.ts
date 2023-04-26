import { PrismaClient, PostType, PostStatus } from '@prisma/client';

const prisma = new PrismaClient();

async function fillDb() {
  await prisma.tag.upsert({
    where: { id: 1 },
    update: {},
    create: {
      title: 'Книги',
      posts: {
        create: [
          {
            type: PostType.text,
            status: PostStatus.posted,
            title: 'Несколько лет назад…',
            announcement: 'announcement',
            text: 'Несколько лет назад купил себе MacBook Pro…',
            userId: '14',
            likesCount: 1,
            commentsCount: 1,
            comments: {
              create: [
                {
                  message: 'Вау! Отличный ноутбук.',
                  userId: '14',
                }
              ]
            }
          }
        ]
      }
    }
  });

  console.info('🤘️ Database was filled')
}

fillDb()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect()

    process.exit(1);
  })
