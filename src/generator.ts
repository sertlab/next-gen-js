import { generateTemplateFiles, CaseConverterEnum } from 'generate-template-files';

export class TemplateGenerator{
    public static generateReactCompoent(componentName:string, componentScope:string)
    {
        
        generateTemplateFiles([
            {
                option: 'React Component',
                defaultCase: CaseConverterEnum.PascalCase,
                entry: {
                    folderPath: 'src/templates/react/',
                },
                stringReplacers: ['__name__',],
                output: {
                    path: './dist/components/__name__(kebabCase)',
                    pathAndFileNameDefaultCase: CaseConverterEnum.PascalCase,
                },
                onComplete: async (results) => {
                    
                    console.log(`results`, results);

                    // const files = results.output.files;
                    // const fullPaths = files
                    //     .map((folderPath) => folderPath.replace('src/', '')) // remove 'src' from path
                    //     .map((path) => `import ${filename(path)} from '${path}'`) // create import statement
                    //     .join('\n'); // put all imports on there own line

                    // try {
                    //     await insertLine('src/import-test.ts').append(fullPaths);
                    // } catch (error) {
                    //     console.log(``, error);
                    // }

                }
            }
        ]).catch(() => {
            console.log('Build Error');
          });
    }
}


TemplateGenerator.generateReactCompoent('test', 'test');